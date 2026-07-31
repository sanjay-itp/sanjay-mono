import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native"

type Props = TextInputProps & {
    label?: string
    error?: string
}

export function InputField({ label, style: inputStyle, error, ...props }: Props) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput placeholderTextColor={"black"} style={[styles.input, inputStyle]} {...props} />

            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        color: 'black',
        borderColor: 'gray',
        padding: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 5,
        color:"black"
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
})