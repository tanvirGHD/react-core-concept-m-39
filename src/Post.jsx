
export default function Post({post}){
    const {title,body} = post;

    const styles = {
        border: '2px solid red',
        margin: '45px',
        borderRadius: '12px',
        padding: '6px'

    }
    return(
        <div style={styles}>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    )
}