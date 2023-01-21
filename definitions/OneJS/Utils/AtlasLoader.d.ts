declare module "OneJS/Utils" {
    export class AtlasLoader {
        spriteDic: Dictionary<string,Sprite>
        loadSprite(spriteBaseName: string): void
        getAtlas(atlasName: string): Sprite
        atlasCount(): number
    }
}