import { DownloadIcon, ImageIcon, ImagePlusIcon, KeyboardIcon,  MoonIcon, RectangleHorizontal, Redo2Icon, SettingsIcon,  TrashIcon, Undo2Icon } from "lucide-react"

type Options = {
    Icon: () => JSX.Element,
    action: Action
}[]
export const options1: Options = [{
    Icon: () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1874_727)">
            <path d="M6.54294 2.46138L18.7048 14.158L12.0014 13.7066L8.20924 19.2526L6.54294 2.46138Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1874_727">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    action: 'Select',
}, {
    Icon: () => <Redo2Icon size={18} />,
    action: 'Redo',
}, {
    Icon: () => <Undo2Icon size={18} />,
    action: 'Undo',
},
{
    Icon: () => <TrashIcon size={18} />,
    action: 'Clear',
}
] as const
export const text = {
    Icon: () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="tool">
            <path id="Vector" d="M3.33325 5.83337V3.33337H16.6666V5.83337" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path id="Vector_2" d="M7.5 16.6666H12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path id="Vector_3" d="M10 3.33337V16.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>,
    action: 'Text',
    options: [
        {
            label: 'Heading\n',
            config: {
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Arial',
                lineHeight: 1.5,
                value: 'Heading',
            }
        },
        {
            label: 'Sub Heading\n',
            config: {
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Arial',
                lineHeight: 1.5,
                value: 'Sub Heading',
            }
        },
        {
            label: 'Body\n',
            config: {
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'Arial',
                lineHeight: 1.5,
                value: 'Body',
            }
        }
    ]
} as const
export const shapes: Options = [
    {
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 3H4.16667C3.24619 3 2.5 3.74619 2.5 4.66667V16.3333C2.5 17.2538 3.24619 18 4.16667 18H15.8333C16.7538 18 17.5 17.2538 17.5 16.3333V4.66667C17.5 3.74619 16.7538 3 15.8333 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        action: 'Rectangle',
    }, {
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 18.8333C14.6025 18.8333 18.3334 15.1023 18.3334 10.5C18.3334 5.89759 14.6025 2.16663 10.0001 2.16663C5.39771 2.16663 1.66675 5.89759 1.66675 10.5C1.66675 15.1023 5.39771 18.8333 10.0001 18.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        action: 'Circle',
    }, {
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5749 3.71672L1.51656 15.5C1.37104 15.7521 1.29403 16.0378 1.29322 16.3288C1.2924 16.6198 1.3678 16.906 1.51192 17.1588C1.65603 17.4116 1.86383 17.6223 2.11465 17.7699C2.36547 17.9175 2.65056 17.9968 2.94156 18H17.0582C17.3492 17.9968 17.6343 17.9175 17.8851 17.7699C18.136 17.6223 18.3438 17.4116 18.4879 17.1588C18.632 16.906 18.7074 16.6198 18.7066 16.3288C18.7058 16.0378 18.6288 15.7521 18.4832 15.5L11.4249 3.71672C11.2763 3.4718 11.0672 3.26931 10.8176 3.12879C10.568 2.98826 10.2863 2.91443 9.9999 2.91443C9.71345 2.91443 9.43184 2.98826 9.18223 3.12879C8.93263 3.26931 8.72345 3.4718 8.5749 3.71672V3.71672Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        action: 'Triangle',
    },
    {
        action: 'Diamond',
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.16663L1.66667 10.5L10 18.8333L18.3333 10.5L10 2.16663Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
    },
    {
        Icon: () => <svg height="64px" width="64px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">  <g> <path fill="currentColor" d="M492.346,41.403c-10.57,3.222-18.868,9.015-25.208,14.756c-4.793,4.326-8.66,8.652-12.12,12.437 c-5.186,5.719-9.459,10.068-13.497,12.631c-2.029,1.311-3.992,2.251-6.296,2.955c-2.304,0.689-5,1.148-8.571,1.148 c-3.63,0-6.356-0.482-8.689-1.186c-4.022-1.252-7.238-3.296-11.142-6.785c-2.896-2.593-6-5.978-9.541-9.86 c-5.319-5.786-11.63-12.852-20.802-18.83c-4.578-2.964-9.874-5.571-15.801-7.349c-5.933-1.792-12.452-2.756-19.379-2.748 c-7.037-0.008-13.653,0.985-19.653,2.83c-10.564,3.222-18.868,9.015-25.209,14.756c-4.793,4.326-8.66,8.652-12.127,12.437 c-5.178,5.719-9.452,10.068-13.482,12.631c-2.03,1.311-3.993,2.251-6.297,2.955c-2.304,0.689-4.993,1.148-8.571,1.148 c-3.63,0-6.348-0.482-8.682-1.186c-4.015-1.252-7.23-3.296-11.134-6.778c-2.896-2.593-6-5.978-9.534-9.868 c-5.326-5.778-11.63-12.852-20.809-18.83c-4.57-2.964-9.874-5.571-15.801-7.349c-5.926-1.792-12.445-2.756-19.375-2.748 c-7.034-0.008-13.649,0.985-19.649,2.83c-10.56,3.222-18.864,9.015-25.202,14.756c-4.789,4.326-8.652,8.66-12.115,12.437 c-5.175,5.726-9.453,10.068-13.483,12.631c-2.03,1.311-3.989,2.251-6.289,2.955c-2.304,0.689-4.993,1.148-8.564,1.148 c-3.63,0-6.352-0.482-8.678-1.186c-4.019-1.252-7.237-3.296-11.142-6.778c-2.889-2.593-5.989-5.978-9.53-9.868 c-5.323-5.778-11.63-12.852-20.801-18.83c-4.575-2.964-9.875-5.571-15.804-7.349C13.441,39.528,6.926,38.565,0,38.573v37.41 c3.63,0.007,6.348,0.481,8.678,1.185c4.023,1.259,7.237,3.297,11.142,6.778c2.892,2.6,5.993,5.985,9.53,9.867 c5.323,5.779,11.63,12.853,20.805,18.831c4.57,2.963,9.867,5.57,15.801,7.356c5.93,1.785,12.445,2.748,19.371,2.74 c7.034,0.008,13.645-0.978,19.649-2.837c10.564-3.215,18.864-9.008,25.206-14.749c4.789-4.327,8.652-8.66,12.116-12.438 c5.17-5.726,9.452-10.067,13.482-12.638c2.03-1.304,3.986-2.252,6.289-2.948c2.3-0.689,4.989-1.141,8.56-1.148 c3.634,0.007,6.352,0.481,8.686,1.185c4.015,1.259,7.237,3.297,11.142,6.778c2.889,2.6,5.985,5.985,9.526,9.867 c5.327,5.779,11.63,12.853,20.809,18.831c4.57,2.963,9.868,5.57,15.801,7.356c5.926,1.785,12.445,2.748,19.371,2.74 c7.038,0.008,13.653-0.978,19.653-2.829c10.564-3.222,18.869-9.008,25.209-14.756c4.793-4.327,8.66-8.653,12.119-12.438 c5.186-5.719,9.46-10.06,13.49-12.63c2.029-1.304,3.992-2.252,6.296-2.956c2.305-0.689,4.993-1.141,8.571-1.148 c3.63,0.007,6.348,0.481,8.682,1.185c4.022,1.259,7.244,3.297,11.149,6.778c2.888,2.6,5.992,5.985,9.534,9.874 c5.319,5.771,11.63,12.846,20.809,18.824c4.57,2.963,9.874,5.57,15.801,7.356c5.934,1.785,12.452,2.748,19.379,2.74 c7.037,0.008,13.645-0.978,19.653-2.829c10.564-3.222,18.868-9.008,25.209-14.756c4.793-4.327,8.66-8.653,12.12-12.431 c5.186-5.726,9.46-10.068,13.497-12.638c2.03-1.304,3.993-2.252,6.297-2.948c2.304-0.696,4.993-1.148,8.571-1.155v-37.41 C504.962,38.565,498.348,39.558,492.346,41.403z" /> <path className="st0" d="M467.138,231.502c-4.793,4.318-8.66,8.652-12.12,12.438c-5.186,5.719-9.459,10.067-13.497,12.63 c-2.029,1.304-3.992,2.252-6.296,2.948c-2.304,0.696-5,1.155-8.571,1.155c-3.63,0-6.356-0.482-8.689-1.185 c-4.022-1.252-7.238-3.297-11.142-6.786c-2.896-2.593-6-5.978-9.541-9.86c-5.319-5.786-11.63-12.852-20.802-18.83 c-4.578-2.963-9.874-5.571-15.801-7.348c-5.933-1.793-12.452-2.756-19.379-2.749c-7.037-0.007-13.653,0.985-19.653,2.83 c-10.564,3.222-18.868,9.008-25.209,14.756c-4.793,4.326-8.66,8.652-12.127,12.438c-5.178,5.719-9.452,10.067-13.482,12.63 c-2.03,1.304-3.993,2.252-6.297,2.948c-2.304,0.696-4.993,1.155-8.571,1.155c-3.63,0-6.348-0.482-8.682-1.185 c-4.015-1.252-7.23-3.297-11.134-6.778c-2.896-2.593-6-5.978-9.534-9.868c-5.326-5.778-11.63-12.852-20.809-18.83 c-4.57-2.963-9.874-5.571-15.801-7.348c-5.926-1.793-12.445-2.756-19.375-2.749c-7.034-0.007-13.649,0.985-19.649,2.83 c-10.56,3.222-18.864,9.016-25.202,14.756c-4.789,4.326-8.652,8.66-12.115,12.438c-5.175,5.726-9.453,10.067-13.483,12.63 c-2.03,1.304-3.989,2.252-6.289,2.948c-2.304,0.696-4.993,1.155-8.564,1.155c-3.63,0-6.352-0.482-8.678-1.185 c-4.019-1.252-7.237-3.297-11.142-6.778c-2.889-2.593-5.989-5.978-9.53-9.868c-5.323-5.778-11.63-12.852-20.801-18.83 c-4.575-2.963-9.875-5.571-15.804-7.348c-5.931-1.793-12.445-2.756-19.372-2.749v37.41c3.63,0.008,6.348,0.482,8.678,1.185 c4.023,1.252,7.237,3.297,11.142,6.778c2.892,2.593,5.993,5.986,9.53,9.868c5.323,5.778,11.63,12.852,20.805,18.83 c4.57,2.963,9.867,5.571,15.801,7.348c5.93,1.793,12.445,2.756,19.371,2.749c7.034,0.007,13.645-0.985,19.649-2.838 c10.564-3.215,18.864-9.008,25.206-14.749c4.789-4.326,8.652-8.66,12.116-12.438c5.17-5.726,9.452-10.067,13.482-12.638 c2.03-1.303,3.986-2.251,6.289-2.948c2.3-0.69,4.989-1.141,8.56-1.148c3.634,0.008,6.352,0.482,8.686,1.185 c4.015,1.252,7.237,3.297,11.142,6.778c2.889,2.593,5.985,5.986,9.526,9.868c5.327,5.778,11.63,12.852,20.809,18.83 c4.57,2.963,9.868,5.571,15.801,7.348c5.926,1.793,12.445,2.756,19.371,2.749c7.038,0.007,13.653-0.985,19.653-2.83 c10.564-3.222,18.869-9.008,25.209-14.756c4.793-4.326,8.66-8.652,12.119-12.438c5.186-5.719,9.46-10.06,13.49-12.63 c2.029-1.304,3.992-2.252,6.296-2.955c2.305-0.69,4.993-1.141,8.571-1.148c3.63,0.008,6.348,0.482,8.682,1.185 c4.022,1.252,7.244,3.297,11.149,6.778c2.888,2.593,5.992,5.986,9.534,9.868c5.319,5.778,11.63,12.852,20.809,18.83 c4.57,2.963,9.874,5.571,15.801,7.348c5.934,1.793,12.452,2.756,19.379,2.749c7.037,0.007,13.645-0.985,19.653-2.83 c10.564-3.222,18.868-9.008,25.209-14.756c4.793-4.326,8.66-8.652,12.12-12.431c5.186-5.726,9.46-10.067,13.497-12.638 c2.03-1.304,3.993-2.252,6.297-2.948c2.304-0.696,4.993-1.148,8.571-1.155v-37.41c-7.038-0.007-13.652,0.985-19.654,2.83 C481.776,219.968,473.479,225.754,467.138,231.502z" /> <path fill="currentColor" d="M467.138,406.845c-4.793,4.319-8.66,8.653-12.12,12.43c-5.186,5.726-9.459,10.068-13.497,12.638 c-2.029,1.304-3.992,2.252-6.296,2.948c-2.304,0.696-5,1.148-8.571,1.155c-3.63-0.007-6.356-0.481-8.689-1.185 c-4.022-1.259-7.238-3.297-11.142-6.785c-2.896-2.593-6-5.978-9.541-9.868c-5.319-5.778-11.63-12.846-20.802-18.824 c-4.578-2.963-9.874-5.57-15.801-7.356c-5.933-1.785-12.452-2.748-19.379-2.74c-7.037-0.008-13.653,0.978-19.653,2.829 c-10.564,3.222-18.868,9.008-25.209,14.756c-4.793,4.327-8.66,8.653-12.127,12.43c-5.178,5.726-9.452,10.068-13.482,12.638 c-2.03,1.304-3.993,2.252-6.297,2.948c-2.304,0.696-4.993,1.148-8.571,1.155c-3.63-0.007-6.348-0.481-8.682-1.185 c-4.015-1.259-7.23-3.297-11.134-6.778c-2.896-2.6-6-5.985-9.534-9.874c-5.326-5.771-11.63-12.846-20.809-18.824 c-4.57-2.963-9.874-5.57-15.801-7.356c-5.926-1.785-12.445-2.748-19.375-2.74c-7.034-0.008-13.649,0.978-19.649,2.829 c-10.56,3.222-18.864,9.016-25.202,14.756c-4.789,4.327-8.652,8.66-12.115,12.438c-5.175,5.726-9.453,10.067-13.483,12.63 c-2.03,1.304-3.989,2.252-6.289,2.948c-2.304,0.696-4.993,1.148-8.564,1.155c-3.63-0.007-6.352-0.481-8.678-1.185 c-4.019-1.259-7.237-3.297-11.142-6.778c-2.889-2.6-5.989-5.985-9.53-9.867c-5.323-5.779-11.63-12.853-20.801-18.831 c-4.575-2.963-9.875-5.57-15.804-7.356c-5.931-1.785-12.445-2.748-19.372-2.74v37.409c3.63,0,6.348,0.482,8.678,1.186 c4.023,1.252,7.237,3.296,11.142,6.778c2.892,2.593,5.993,5.978,9.53,9.868c5.323,5.778,11.63,12.852,20.805,18.83 c4.57,2.964,9.867,5.571,15.801,7.349c5.93,1.792,12.445,2.756,19.371,2.748c7.034,0.008,13.645-0.985,19.649-2.837 c10.564-3.216,18.864-9.008,25.206-14.75c4.789-4.326,8.652-8.66,12.116-12.438c5.17-5.726,9.452-10.068,13.482-12.638 c2.03-1.304,3.986-2.252,6.289-2.948c2.3-0.689,4.989-1.148,8.56-1.148c3.634,0,6.352,0.482,8.686,1.186 c4.015,1.252,7.237,3.296,11.142,6.778c2.889,2.593,5.985,5.978,9.526,9.868c5.327,5.778,11.63,12.852,20.809,18.83 c4.57,2.964,9.868,5.571,15.801,7.349c5.926,1.792,12.445,2.756,19.371,2.748c7.038,0.008,13.653-0.985,19.653-2.83 c10.564-3.222,18.869-9.015,25.209-14.756c4.793-4.326,8.66-8.652,12.119-12.438c5.186-5.719,9.46-10.068,13.49-12.631 c2.029-1.311,3.992-2.251,6.296-2.955c2.305-0.689,4.993-1.148,8.571-1.148c3.63,0,6.348,0.482,8.682,1.186 c4.022,1.252,7.244,3.296,11.149,6.778c2.888,2.593,5.992,5.978,9.534,9.868c5.319,5.778,11.63,12.852,20.809,18.83 c4.57,2.964,9.874,5.571,15.801,7.349c5.934,1.792,12.452,2.756,19.379,2.748c7.037,0.008,13.645-0.985,19.653-2.83 c10.564-3.222,18.868-9.015,25.209-14.756c4.793-4.326,8.66-8.652,12.12-12.438c5.186-5.719,9.46-10.068,13.497-12.631 c2.03-1.311,3.993-2.251,6.297-2.948c2.304-0.696,4.993-1.156,8.571-1.156V389.26c-7.038-0.008-13.652,0.978-19.654,2.829 C481.776,395.311,473.479,401.097,467.138,406.845z" /> </g> </g>

        </svg>,
        action: 'Drawing',
    },
    {
        /* Star shape */
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.16663L11.9 7.66663H17.5L12.9 10.6666L14.8 16.1666L10 13.1666L5.2 16.1666L7.1 10.6666L2.5 7.66663H8.1L10 2.16663Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        action: 'Star',
    },
    {
        action: 'Line',
        // 60 DEGREES Striaght LINE
        Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83325 15.8334L14.1666 5.83337" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
    }
]
export const image =
{
    Icon: () => <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 3H4.16667C3.24619 3 2.5 3.74619 2.5 4.66667V16.3333C2.5 17.2538 3.24619 18 4.16667 18H15.8333C16.7538 18 17.5 17.2538 17.5 16.3333V4.66667C17.5 3.74619 16.7538 3 15.8333 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7.08325 8.83337C7.77361 8.83337 8.33325 8.27373 8.33325 7.58337C8.33325 6.89302 7.77361 6.33337 7.08325 6.33337C6.3929 6.33337 5.83325 6.89302 5.83325 7.58337C5.83325 8.27373 6.3929 8.83337 7.08325 8.83337Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17.5001 13L13.3334 8.83337L4.16675 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    action: 'Image',
    options: [
        {
            label: 'Upload Image',
            Icon: () => <ImagePlusIcon />,
            action: 'Upload'
        },
        {
            label: 'Select Image',
            Icon: () => <ImageIcon />,
            action: 'Select'
        },
        {
            label: 'Unsplash',
            Icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <g>
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z" />
                </g>
            </svg>,
            action: 'Unsplash'
        }
    ]
}
export const exportMenu = {
    label: 'Export',
    Icon: () => <DownloadIcon size={17} />,
    options: [
        {
            label: 'PNG',
            description: "Great for sharing",
            Icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" width="60px" version="1.1" id="_x32_" viewBox="0 0 512 512" >
                    <g>
                        <path d="M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514   c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z    M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716   c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z" />
                        <path d="M165.287,252.785h-28.515c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599   c5.697,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.265-0.817,0.81-0.817h16.436c20.109,0,32.188-12.226,32.188-29.612   C197.475,264.871,185.521,252.785,165.287,252.785z M164.072,294.888h-15.221c-0.545,0-0.81-0.272-0.81-0.81v-23.23   c0-0.545,0.265-0.816,0.81-0.816h15.221c8.42,0,13.448,5.027,13.448,12.498C177.519,290,172.492,294.888,164.072,294.888z" />
                        <path d="M275.187,251.968c-5.432,0-9.104,3.532-9.104,9.642v50.531h-0.545l-28.25-50.39   c-3.658-6.389-7.471-9.782-13.168-9.782c-6.801,0-11.144,4.622-11.144,11.954v72.398c0,6.109,3.673,9.643,9.105,9.643   c5.432,0,9.09-3.534,9.09-9.643v-50.398h0.545l28.25,50.258c3.673,6.382,7.471,9.782,13.182,9.782   c6.787,0,11.144-4.622,11.144-11.954V261.61C284.292,255.5,280.619,251.968,275.187,251.968z" />
                        <path d="M366.878,293.806h-19.019c-5.153,0-8.421,3.121-8.421,7.876c0,4.755,3.268,7.876,8.421,7.876h6.256   c0.544,0,0.809,0.272,0.809,0.816c0,3.533-0.265,6.654-1.089,9.098c-1.899,5.844-7.736,9.51-14.802,9.51   c-8.016,0-13.043-3.938-15.068-10.187c-1.09-3.393-1.494-7.876-1.494-19.83c0-11.953,0.405-16.296,1.494-19.696   c2.025-6.382,6.926-10.32,14.802-10.32c5.976,0,10.459,1.899,13.992,6.786c2.709,3.805,5.432,4.895,8.826,4.895   c5.027,0,9.091-3.666,9.091-8.965c0-2.171-0.671-4.078-1.76-5.977c-4.888-8.287-15.208-14.397-30.149-14.397   c-16.437,0-29.2,7.471-33.962,22.412c-2.039,6.515-2.584,11.682-2.584,25.262c0,13.581,0.545,18.74,2.584,25.262   c4.762,14.942,17.525,22.413,33.962,22.413c16.436,0,28.92-8.288,33.682-23.09c1.634-5.16,2.304-12.77,2.304-20.919v-0.95   C374.754,296.654,371.905,293.806,366.878,293.806z" />
                    </g>
                </svg>
            ),
            action: 'PNG'
        },
        {
            label: 'SVG',
            description: "Great for editing",
            Icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" height="800px" width="800px" version="1.1" id="_x32_" viewBox="0 0 512 512" >

                    <g>
                        <path d="M378.409,0H208.294h-13.176l-9.314,9.315L57.017,138.101l-9.314,9.315v13.176v265.513   c0,47.36,38.528,85.896,85.895,85.896h244.811c47.361,0,85.888-38.535,85.888-85.896V85.896C464.297,38.528,425.77,0,378.409,0z    M432.493,426.104c0,29.877-24.214,54.091-54.084,54.091H133.598c-29.877,0-54.091-24.214-54.091-54.091V160.592h83.717   c24.884,0,45.07-20.179,45.07-45.071V31.804h170.114c29.87,0,54.084,24.214,54.084,54.091V426.104z" />
                        <path d="M180.296,296.668l-4.846-0.67c-10.63-1.487-14.265-4.978-14.265-10.104c0-5.78,4.309-9.817,12.383-9.817   c5.653,0,11.305,1.62,15.745,3.764c1.886,0.942,3.903,1.487,5.789,1.487c4.845,0,8.612-3.63,8.612-8.616   c0-3.226-1.481-5.921-4.71-7.939c-5.384-3.372-15.476-6.06-25.572-6.06c-19.781,0-32.436,11.171-32.436,27.998   c0,16.15,10.232,24.898,28.938,27.454l4.846,0.67c10.903,1.48,14.129,4.846,14.129,10.229c0,6.326-5.247,10.766-14.939,10.766   c-6.727,0-12.111-1.745-19.645-5.921c-1.616-0.942-3.634-1.62-5.788-1.62c-5.115,0-8.885,3.91-8.885,8.756   c0,3.226,1.616,6.326,4.713,8.344c6.054,3.764,15.878,7.8,28.798,7.8c23.823,0,35.934-12.24,35.934-28.795   C209.097,307.84,199.273,299.356,180.296,296.668z" />
                        <path d="M281.108,259.382c-4.577,0-7.939,2.43-9.556,7.674l-16.69,54.51h-0.402l-17.634-54.51   c-1.745-5.244-4.978-7.674-9.551-7.674c-5.653,0-9.692,4.176-9.692,9.287c0,1.347,0.269,2.834,0.67,4.175l23.286,68.104   c2.96,8.477,6.727,11.57,12.652,11.57c5.785,0,9.555-3.093,12.516-11.57l23.282-68.104c0.406-1.341,0.674-2.828,0.674-4.175   C290.664,263.558,286.76,259.382,281.108,259.382z" />
                        <path d="M364.556,300.836h-18.841c-5.114,0-8.344,3.1-8.344,7.806c0,4.713,3.23,7.814,8.344,7.814h6.193   c0.538,0,0.803,0.258,0.803,0.803c0,3.505-0.265,6.598-1.075,9.014c-1.882,5.796-7.67,9.426-14.669,9.426   c-7.943,0-12.921-3.903-14.939-10.096c-1.075-3.365-1.48-7.8-1.48-19.648c0-11.842,0.405-16.15,1.48-19.516   c2.018-6.325,6.867-10.228,14.67-10.228c5.924,0,10.362,1.885,13.859,6.724c2.695,3.777,5.387,4.852,8.749,4.852   c4.981,0,9.021-3.638,9.021-8.888c0-2.151-0.674-4.035-1.752-5.921c-4.842-8.204-15.071-14.264-29.877-14.264   c-16.287,0-28.935,7.408-33.644,22.204c-2.022,6.466-2.559,11.576-2.559,25.038c0,13.454,0.538,18.573,2.559,25.031   c4.709,14.802,17.357,22.204,33.644,22.204c16.286,0,28.668-8.204,33.374-22.881c1.617-5.111,2.29-12.645,2.29-20.716v-0.95   C372.362,303.664,369.538,300.836,364.556,300.836z" />
                    </g>
                </svg>
            ),
            action: 'SVG'
        },
        {
            label: 'JSON',
            description: "For future editing",
            Icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="60px" width="60px" version="1.1" id="Capa_1" viewBox="0 0 58 58">
                    <g>
                        <path d="M33.655,45.988c-0.232-0.31-0.497-0.533-0.793-0.67s-0.608-0.205-0.937-0.205c-0.337,0-0.658,0.063-0.964,0.191   s-0.579,0.344-0.82,0.649s-0.431,0.699-0.567,1.183c-0.137,0.483-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75   s0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67s0.608,0.212,0.937,0.212c0.337,0,0.658-0.066,0.964-0.198s0.579-0.349,0.82-0.649   s0.431-0.695,0.567-1.183s0.21-1.082,0.219-1.784c-0.009-0.684-0.08-1.265-0.212-1.743S33.888,46.298,33.655,45.988z" />
                        <path d="M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963   C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M29.5,33c0,0.552-0.447,1-1,1s-1-0.448-1-1v-3c0-0.552,0.447-1,1-1s1,0.448,1,1V33z    M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M36.5,24v-4   c0-0.551-0.448-1-1-1c-0.553,0-1-0.448-1-1s0.447-1,1-1c1.654,0,3,1.346,3,3v4c0,1.103,0.897,2,2,2c0.553,0,1,0.448,1,1   s-0.447,1-1,1c-1.103,0-2,0.897-2,2v4c0,1.654-1.346,3-3,3c-0.553,0-1-0.448-1-1s0.447-1,1-1c0.552,0,1-0.449,1-1v-4   c0-1.2,0.542-2.266,1.382-3C37.042,26.266,36.5,25.2,36.5,24z M28.5,22c0.828,0,1.5,0.672,1.5,1.5S29.328,25,28.5,25   c-0.828,0-1.5-0.672-1.5-1.5S27.672,22,28.5,22z M16.5,26c1.103,0,2-0.897,2-2v-4c0-1.654,1.346-3,3-3c0.553,0,1,0.448,1,1   s-0.447,1-1,1c-0.552,0-1,0.449-1,1v4c0,1.2-0.542,2.266-1.382,3c0.84,0.734,1.382,1.8,1.382,3v4c0,0.551,0.448,1,1,1   c0.553,0,1,0.448,1,1s-0.447,1-1,1c-1.654,0-3-1.346-3-3v-4c0-1.103-0.897-2-2-2c-0.553,0-1-0.448-1-1S15.947,26,16.5,26z" />
                        <path d="M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M18.021,51.566   c0,0.474-0.087,0.873-0.26,1.196s-0.405,0.583-0.697,0.779s-0.627,0.333-1.005,0.41c-0.378,0.077-0.768,0.116-1.169,0.116   c-0.2,0-0.436-0.021-0.704-0.062s-0.547-0.104-0.834-0.191s-0.563-0.185-0.827-0.294s-0.487-0.232-0.67-0.369l0.697-1.107   c0.091,0.063,0.221,0.13,0.39,0.198s0.354,0.132,0.554,0.191s0.41,0.111,0.629,0.157s0.424,0.068,0.615,0.068   c0.483,0,0.868-0.094,1.155-0.28s0.439-0.504,0.458-0.95v-7.711h1.668V51.566z M25.958,52.298c-0.15,0.342-0.362,0.643-0.636,0.902   s-0.61,0.467-1.012,0.622s-0.856,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116   c-0.237-0.055-0.463-0.13-0.677-0.226s-0.398-0.212-0.554-0.349l0.287-1.176c0.128,0.073,0.289,0.144,0.485,0.212   s0.398,0.132,0.608,0.191s0.419,0.107,0.629,0.144s0.405,0.055,0.588,0.055c0.556,0,0.982-0.13,1.278-0.39s0.444-0.645,0.444-1.155   c0-0.31-0.104-0.574-0.314-0.793s-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533s-0.706-0.388-1.025-0.629   s-0.583-0.526-0.793-0.854s-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189s0.385-0.641,0.663-0.882   s0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116s0.774,0.203,1.039,0.376   c-0.055,0.118-0.118,0.248-0.191,0.39s-0.142,0.273-0.205,0.396s-0.118,0.226-0.164,0.308s-0.073,0.128-0.082,0.137   c-0.055-0.027-0.116-0.063-0.185-0.109s-0.166-0.091-0.294-0.137s-0.296-0.077-0.506-0.096s-0.479-0.014-0.807,0.014   c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321s-0.228,0.271-0.301,0.431s-0.109,0.313-0.109,0.458   c0,0.364,0.104,0.658,0.314,0.882s0.47,0.419,0.779,0.588s0.647,0.333,1.012,0.492s0.704,0.354,1.019,0.581   s0.576,0.513,0.786,0.854s0.314,0.781,0.314,1.319C26.184,51.603,26.108,51.956,25.958,52.298z M35.761,51.156   c-0.214,0.647-0.511,1.185-0.889,1.613s-0.82,0.752-1.326,0.971s-1.06,0.328-1.661,0.328s-1.155-0.109-1.661-0.328   s-0.948-0.542-1.326-0.971s-0.675-0.966-0.889-1.613s-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235s0.511-1.178,0.889-1.606   s0.82-0.754,1.326-0.978s1.06-0.335,1.661-0.335s1.155,0.111,1.661,0.335s0.948,0.549,1.326,0.978s0.675,0.964,0.889,1.606   s0.321,1.388,0.321,2.235S35.975,50.509,35.761,51.156z M45.68,54h-1.668l-3.951-6.945V54h-1.668V43.924h1.668l3.951,6.945v-6.945   h1.668V54z" />
                    </g>
                </svg>
            ),
            action: 'JSON'
        },
    ] as const
};


export const settingsMenu = {
    label: 'Settings',
    Icon:() => <SettingsIcon />,
    options: [
        {
            label: "Dark Mode",
            Icon: () =>  <MoonIcon size={18} />,
            action: 'Theme'  as const,
           type: "toggle" as const,
        },
        {
            label: "Keyboard Shortcuts",
            Icon: () => <KeyboardIcon />,
            action: 'Keyboard'  as const,
        },
        {
            label: "Workspace Settings",
            Icon: () => <RectangleHorizontal />,
            action: 'Workspace'  as const,
        },

    ]
} 
export type Action = 'Select' | 'Text' | 'Image' | 'Rectangle' | 'Circle' | 'Triangle' | 'Diamond' | 'Drawing' | 'Star' | 'Line' | 'Undo' | 'Redo' | 'Clear'
export type Config = {
    fontSize: number;
    fontWeight: string;
    fontFamily: string;
    lineHeight: number;
    value: string;
}
export type TextLabel = 'Heading' | 'Sub Heading' | 'Body'