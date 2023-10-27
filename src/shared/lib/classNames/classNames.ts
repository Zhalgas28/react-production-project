type Modes = Record<string, string | boolean>

export function classNames(cls: string, mods: Modes = {}, adds: string[] = []): string {
    return [
        cls,
        ...adds.filter(className => Boolean(className)),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls)
    ].join(" ")
}