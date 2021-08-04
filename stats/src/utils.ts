export const dateStringToDate = (dateString: string): Date => {
    //04/08/2020 --> ['04', '08', '2020']  --> [ 04, 08, 2020 ]
    const dateParts = dateString
      .split('/')
      .map((value: string): number => {
        return parseInt(value);
      });
    
      //new Date(year, month, day) every argument in number. see --> https://www.w3schools.com/js/js_dates.asp
      //month starts on 0(Junuary):
      return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
};