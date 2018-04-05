export interface Todo{
  id:number
  content:string
  toggle:boolean
}
export enum TodoFilter{
    ALL,
    Complete,
    Uncomplete
}