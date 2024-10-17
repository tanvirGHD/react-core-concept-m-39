export default function Friend({friend}){
    console.log(friend);
    
    const {name,email} = friend;
    
    const styles = {
        border: '2px solid red',
        margin: '45px',
        borderRadius: '12px',
        padding: '6px'

    }
    return(
        <div style={styles}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}