export type PathType = 'tech' | 'poem';
export function chosePath(path: PathType): string {
   if (path === 'tech') {
       return 'allContentfulTech'
   } else if (path === 'poem') {
       return 'allContentfulPoem'
   } else {
       return  'allContentfulTech'
   }
}