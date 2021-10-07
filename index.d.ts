declare module "discord.prefixdb"
    export interface Options{
        message: Object;
    }
    export class PrefixDB{
        constructor(options: Options)
        public get(defaultprefix : string): any
        public set(prefix : string): any
        public all(): any
        public delete(): any
    }
