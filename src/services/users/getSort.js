// ES PALABRA DE DIOS
Array.prototype.sortColumn = function(column) {

       function compare(a, b) {
              const userA = typeof(a[column]) === 'string' ?  a[column].toLowerCase() : a[column]
              const userB = typeof(b[column]) === 'string' ?  b[column].toLowerCase() : b[column]
       
              let comparison = 0;
       
              if (userA > userB) {
                     comparison = 1;
              } else if (userA < userB) {
                     comparison = -1
              }
              return comparison
       }
       return this.sort(compare)
}


export function getSort(users, column) {
       return users.sortColumn(column)

}



