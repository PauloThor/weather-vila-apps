class TimeUtils {
  static getTimeHours = (date: string) => {
    const index = date.indexOf("T") + 1;
    const output = date.slice(index, index + 5);

    return output;
  };
}

export default TimeUtils;
