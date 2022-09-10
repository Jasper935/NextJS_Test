
import style from '../../styles/Users.module.scss'
export default function User({ user }) {
    // const { query } = useRouter() here we got id from query
    return (
        <div>
            <h1 className={style.user}>
                User with id{user.id}
                <div>User name: {user.name}</div>
            </h1>
        </div>)
}
export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: { user },
    }
}