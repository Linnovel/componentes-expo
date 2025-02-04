import useAnimation from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing, View } from "react-native";

const Animation101Screen = () => {
  const { fadeIn, fadeOut, startMovingTop, animatedOpacity, animatedTop } =
    useAnimation();

  return (
    <ThemedView>
      <View className="justify-center items-center flex-1">
        <Animated.View
          className="rounded-xl bg-red-400 "
          style={{
            width: 150,
            height: 150,
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          }}
        />
      </View>

      <ThemedButton
        className="mb-5 w-50 mt-4"
        onPress={() => {
          fadeIn({}),
            startMovingTop({
              easing: Easing.bounce,
              duration: 700,
            });
        }}
      >
        Fade In
      </ThemedButton>

      <ThemedButton
        className="mb-5 mt-4"
        onPress={() => {
          fadeOut({});
        }}
      >
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
