import { useUser } from "@clerk/clerk-react";


const Home = () => {
    const { user } = useUser();

    return (


        <div style={{ padding: "2rem" }
        }>
            <h2>Välkommen {user?.firstName}</h2>
        </div >
    )
}

export default Home