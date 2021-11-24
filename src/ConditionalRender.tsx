/* import { useQuery } from 'react-query';
export function ConditionalRender() {
    const fetchUsers = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // throw new Error('error msg custom');
        return 'Data Information'
    }
    const RenderData = () => {
        const { data, isError, isFetching } = useQuery('fetchData', fetchUsers);
        if (isFetching) {
            return <div>data is fetching..</div>
        } else if (isError) {
            return <div>error in data fetching</div>
        } else {
            return <div>{data}</div>
        }
    }
    return (
        <>{RenderData()}</>
    )
} */
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();
const fetchUsers = async () => {
    // const result = await fetch('https://swapi.dev/api/people')
    // return result.json()
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return 'Data Information emailed successfully'
}
const UserData = () => {
    const { data, isError, isFetching } = useQuery('fetchData', fetchUsers,{retry:false});
    if (isFetching) {
        return <div>data is fetching..</div>
    } else if (isError) {
        return <div>error in data fetching</div>
    } else {
        return <div>{data}</div>
    }
}
export function ConditionalRender() {
    return (<QueryClientProvider client={queryClient}>
        <UserData />
    </QueryClientProvider>
    );
}