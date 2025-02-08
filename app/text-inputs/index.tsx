import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const isIos = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIos ? "padding" : undefined}>
      <ScrollView>
        <View>
          <ThemeCard className="mb-5 bg-green-900 gap-8 p-4 ">
            <ThemedTextInput
              onChangeText={(text) => setForm({ ...form, name: text })}
              // autoComplete="family-name"
              autoCapitalize="words"
              autoCorrect={false}
              // keyboardType="default"
              placeholder="Nombre Completo"
            />
            <ThemedTextInput
              onChangeText={(email) => setForm({ ...form, email: email })}
              keyboardType="email-address"
              placeholder="Tu Email"
            />
            <ThemedTextInput
              onChangeText={(phone) => setForm({ ...form, phone: phone })}
              keyboardType="phone-pad"
              placeholder="Tu numero Celular"
            />
            <ThemedTextInput
              onChangeText={(password) =>
                setForm({ ...form, password: password })
              }
              placeholder="Tu Contraseña "
            />
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
          <ThemeCard
            style={{
              marginBottom: isIos ? 32 : 10,
            }}
          >
            <TextInput
              onChangeText={(phone) => setForm({ ...form, phone: phone })}
              keyboardType="phone-pad"
              placeholder="Tu numero Celular"
            />
          </ThemeCard>
        </View>
        {isIos && <View style={{ marginBottom: 32 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
