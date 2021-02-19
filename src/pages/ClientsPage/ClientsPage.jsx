import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage({ user }) {

async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
    }

    return (
    <>
        {user.trainer ? <h1>Welcome, Trainer.</h1> : <h1>We don't serve your kind here.</h1>}
    </>
    );
}