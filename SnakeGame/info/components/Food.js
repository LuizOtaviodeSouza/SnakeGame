import { Text, View } from "react-native";
import { BORDER, HEARDER_HEIGHT, PIXEL} from "../consts";

const foodemojus = [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🫐",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
];

const Food = ({ coords, top }) => {
    const randDomFood = foodemojus[Math.floor(Math.random() * foodemojus.length)];
    const foodStyle = {
        window: PIXEL,
        height: PIXEL,
        top: coords.y * PIXEL + HEADER_HEIGHT + top,
        left: coords.x * PIXEL + BORDER,
    };
    return (
        <View style={[{ position: "absolute" }, foodStyle]}>
         <Text>{randDomFood}</Text>
         </View>
    );
}

export default Food