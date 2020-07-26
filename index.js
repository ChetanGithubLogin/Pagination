function pagination(totalItems,pageSize = 10,currentPage = 1,maxPage = 10){
  
  let totalPages= Math.ceil(totalItems/pageSize)
  // setting current page 
  if(currentPage < 1){
    currentPage = 1
  }else if(currentPage > totalPages){
        currentPage = totalPages
  }

  let startPage,endPage;
  if(totalPages <=maxPage){
      startPage = 1
      endPage = totalPages;
  }else {
    let pageBeforeCurrentPage=Math.floor(pageSize/2);
    let pageAfterCurrentPage= Math.ceil(pageSize/2 - 1);
    if(currentPage <= pageBeforeCurrentPage){
      startPage= 1;
      endPage = maxPage;
    }else if(currentpage + pageAfterCurrentPage >= totalPages){
      startPage =totalPages - maxPage + 1
      endPage = totalPages;
    } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
  }
  // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };

}

console.log(pagination(75));