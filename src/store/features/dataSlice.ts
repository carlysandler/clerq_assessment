import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IPossibleDataType, MetaData, ListRequestParams, UUID } from "@/types";

interface INormalized {
	ids: Array<UUID>;
}
interface NewDataState<T> {
	params?: ListRequestParams;
	data: T[];
	normalizedData: INormalized;
	meta: MetaData;
	loading: boolean;
	error: string | null;
}

// Initial state for the infinite scroll slice
const infiniteScrollInitialState: NewDataState<IPossibleDataType> = {
	params: {
		page: 1
	},
	data: [],
	normalizedData: {
		ids: [],
	},
	meta: {
		total: -1,
		next: null,
		previous: null
	},
	loading: false,
	error: null,
};

export const fetchMoreDataThunk = createAsyncThunk(
	"data/fetchMore",
	async ({ params, fetch }: { params: ListRequestParams, fetch: (params: ListRequestParams) => Promise<{ data: IPossibleDataType[]; meta: MetaData }> }) => {

		return await fetch(params);
	}
);



// Slice for infinite scrolling
const dataSlice = createSlice({
	name: "dataSlice",
	initialState: infiniteScrollInitialState,
	reducers: {
		updateParams(state, action) {
			state.params = { ...state.params, ...action.payload };
		},
		resetData(state) {
			state.data = [];
			state.normalizedData.ids = [];
			state.meta = { total: -1, next: null, previous: null };
			state.error = null;
		},

	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoreDataThunk.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchMoreDataThunk.fulfilled, (state, action) => {
				// Temp workaround for double call on init mount:
				state.loading = false;
				const payloadData = action.payload.data.map((d) => d.id);
				if (state.normalizedData.ids.includes(payloadData[0])) return;
				else {
					state.data = [...state.data, ...action.payload.data];
					state.normalizedData.ids = [
						...state.normalizedData.ids,
						...action.payload.data.map((d) => d.id),
					];
					state.meta = {
						...state.meta,
						total: action.payload.meta.total,
						next: action.payload.meta.next,
						previous: action.payload.meta.next
					};
				}
			})
			.addCase(fetchMoreDataThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Failed to fetch data";
			});
	},
});

// Export the actions and reducer
export const { resetData, updateParams } = dataSlice.actions;
export default dataSlice.reducer;
