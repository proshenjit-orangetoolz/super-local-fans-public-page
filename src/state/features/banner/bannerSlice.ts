import {apiSlice} from "@/state/features/rootApi/apiSlice";

interface IAddBanner {
    name: string;
    bannerImage: File
}

interface IBannerDetails {
    uid: string;
    name: string;
    bannerImage: File
}

interface IUpdateBanner extends IAddBanner {
    uid: string
}

const bannerApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        // get banner list
        getBannerList: build.query<undefined, IBannerDetails>({
            query: () => '/banner/list',
            providesTags: ['banner']
        }),

        // add banner
        addBanner: build.mutation<IAddBanner, Partial<IAddBanner>>({
            query: (body) => ({
                url: '/banner/add',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['banner'],
        }),

        // get specific banner details
        getSpecificBanner: build.query<string, Partial<IBannerDetails>>({
            query: (body) => ({
                url: '/get/specific/banner/details',
                method: 'GET',
                body,
            }),
        }),

        // update specific banner
        updateBanner: build.mutation<IUpdateBanner, Partial<IUpdateBanner>>({
            query: (body) => ({
                url: `/banner/update`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['banner'],
        }),

        // delete single banner
        deleteBanner: build.mutation<string, string>({
            query: (body) => ({
                url: '/banner/delete',
                method: 'DELETE',
                body,
            }),
            invalidatesTags: ['banner'],
        })
    })
});


export const {
    useGetBannerListQuery,
    useAddBannerMutation,
    useGetSpecificBannerQuery,
    useUpdateBannerMutation,
    useDeleteBannerMutation
} = bannerApiSlice;