class TimeUtils {
  static getTimeHours = (date: string) => {
    const index = date.indexOf("T") + 1;
    const output = date.slice(index, index + 5);

    return output;
  };

  static getTimeDay = (date: string) => {
    const output = date.slice(8, 10);
    return output;
  };
}

export default TimeUtils;
