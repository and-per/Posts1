const Link = "https://65be1f4ddcfcce42a6f1e0c4.mockapi.io/Posts"

function CreatePost(Title, Content) {
    const requestData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            PostTitle: Title,
            PostContent: Content
        }),
    };
    fetch(Link, requestData)
}

export const Funcs = {
    CreatePost
}
// CreatePost("TestTitle", "TestContent")
