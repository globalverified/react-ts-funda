interface IProps{
    name: string,
    id ?: string
}
function Welcome(props: IProps){
    const {name} = props;
    return <div>Welcome {name}</div>
}
export default Welcome;