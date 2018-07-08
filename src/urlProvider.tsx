export const urlProvider = {
    endpoint: getEndpoint()
};

function getEndpoint(): string {
    if (location.hostname == 'localhost') {
        return 'http://localhost:9000';
    } else {
        return 'http://ec2-52-199-201-116.ap-northeast-1.compute.amazonaws.com';
    }
}