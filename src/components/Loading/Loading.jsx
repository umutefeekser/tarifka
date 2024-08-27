import LottieView from "lottie-react-native";

export default function Loading() {

  return <LottieView
  source={require("../../assets/Loading.json")}
  style={{width: "100%", height: "100%"}}
  autoPlay
  loop
  speed={3}
/>

}