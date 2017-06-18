export interface HoleModel {
  id: string,
  date: string,
  name: string,
  avatar: string,
  content: string,
  children: HoleModel[]
};

export interface HoleHttpModel {
  name: string,
  avatar: string,
  total: number,
  index: number,
  pagesize: number,
  holes: HoleModel[]
}