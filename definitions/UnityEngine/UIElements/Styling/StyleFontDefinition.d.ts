

declare module "UnityEngine/UIElements" {
    import { Color, Font, Texture2D } from "UnityEngine"

    export class FontDefinition {
        static FromFont(f: Font): FontDefinition

        font: Font
        
        constructor(x: Length, y: Length, z: number)
    }

    export class StyleFontDefinition implements IStyleValue<FontDefinition> {
        value: FontDefinition
        keyword: StyleKeyword

        constructor(v: FontDefinition)
        constructor(k: StyleKeyword)
    }
}