import LottieView from "lottie-react-native";

export default function Error() {

  return <LottieView
  source={require("../../assets/Error.json")}
  style={{width: "100%", height: "100%"}}
  autoPlay
  loop={false}
/>

}