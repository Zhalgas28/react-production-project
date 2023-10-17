type Modes = Record<string, string | boolean>
export function classNames(cls: string, mods: Modes, adds: string[]): string {
    return [
        cls,
        ...adds,
        ...Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(" ")
}