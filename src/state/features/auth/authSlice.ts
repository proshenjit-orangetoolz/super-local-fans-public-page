import {apiSlice} from "@/state/features/rootApi/apiSlice";
import {getFolders} from "@/state/features/folder/folderSlice";

interface ILogin {
    email: number
    password: string
}

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<ILogin, Partial<ILogin>>({
            query: (body) => ({
                url: `/login`,
                method: 'POST',
                body,
            }),
        }),
        logOut: build.mutation<ILogin, Partial<ILogin>>({
            query: (body) => ({
                url: `/logout`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Login'],
        }),
        getPost: build.query<ILogin, string>({
            query: (id) => `post/${id}`,
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled
                    // `onSuccess` side-effect
                    dispatch(getFolders())
                } catch (err) {
                    // `onError` side-effect
                    dispatch(getFolders())
                }
            },
        }),
    }),
    overrideExisting: false,
})

export const {useLoginMutation} = authApiSlice;
