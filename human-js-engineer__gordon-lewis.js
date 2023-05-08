// Get CSRF token from meta tag
function getCsrfTokenFromMetaTag() {
    const metaTag = document.querySelector('meta[name="awsc-csrf-token"]');
    return metaTag ? metaTag.content : null;
}

const csrfToken = getCsrfTokenFromMetaTag()

const payload = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "X-Csrf-Token": decodeURIComponent(csrfToken),
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Origin": "https://us-east-1.console.aws.amazon.com",
        "Pragma": "no-cache",
    },
    body: JSON.stringify({
        headers: {
            "X-Amz-User-Agent": "aws-sdk-js/2.850.0 promise",
            "Content-Type": "application/x-amz-json-1.0",
            "X-Amz-Target": "AWSIdentityManagementV20100508.CreateAccessKey",
        },
        path: "/",
        method: "POST",
        region: "us-east-1",
        params: {},
        contentString: "{}",
        operation: "createAccessKey",
    }),
};

fetch("https://us-east-1.console.aws.amazon.com/iamv2/api/iam", payload)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
