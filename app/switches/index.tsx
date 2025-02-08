import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView className="mt-2">
      <ThemeCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(prevState) =>
            setState({ ...state, isActive: prevState })
          }
          value={state.isActive}
        /> */}
        <ThemedSwitch
          text="Activo"
          className="mb-8 "
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
        />
        <ThemedSwitch
          text="Hambriento"
          className="mb-8 "
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
        />
        <ThemedSwitch
          text="Contento"
          className="mb-8 "
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
