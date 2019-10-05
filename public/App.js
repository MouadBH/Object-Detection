class App extends React.Component {
    video = React.createRef();
    canvas = React.createRef();

    styles = {
        position: 'fixed',
        top: 150,
        left: 150,
    };

    componentDidMount() {
        if (navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia) {
            let webCamStream = navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            }).then(stream => {
                window.stream = stream;
                this.video.current.srcObject = stream;

                return new Promise(resolve => {
                    this.video.current.onloadedmetadata = () => {
                        resolve();
                    };
                });
            }, (error) => {
                console.log("Couldn't start the webcam ... You need tea")
                console.error(error)
            });

            const loadlModelPromise = cocoSsd.load();

            Promise.all([loadlModelPromise, webCamStream]).then(val => {
                this.detectFromVideoFrame(val[0], this.videoRef.current);
            }).catch(error => {
                console.error(error);
            });
        }
    }

    detectFromVideoFrame = (model, video) => {
        model.detect(video).then(() => {
            

            requestAnimationFrame(() => {
                this.detectFromVideoFrame(model, video);
            });
        }, (error) => {
            console.log("Couldn't start the webcam ... You need tea")
            console.error(error)
        });
    };

    render() {
        return (
            <div>
                <video
                    style={this.styles}
                    autoPlay
                    muted
                    ref={this.video}
                    width="720"
                    height="600"
                />
                <canvas style={this.styles} ref={this.canvas} width="720" height="650" />
            </div>
        );
    }
}

const domElement = document.querySelector('#root');
const e = React.createElement;
ReactDOM.render(<App />, domElement);