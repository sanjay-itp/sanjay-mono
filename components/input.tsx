import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

type Props = TextInputProps & {
    label?: string
    error?: string
}

export function InputField({ label, style: inputStyle, error, ...props }: Props) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={[styles.input, inputStyle]} {...props} />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
})