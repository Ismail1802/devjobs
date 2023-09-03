import { stringHandler } from "../../utils";
export type JobType = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: object;
  };
  role: {
    content: string;
    items: object;
  };
};

export function filterHelper(
  job: JobType,
  isFullTime: boolean,
  searchRef: React.RefObject<HTMLInputElement>,
  locationRef: React.RefObject<HTMLInputElement>
) {
  const currentMarked = isFullTime ? "Full Time" : job.contract;
  const currentSearch = searchRef.current!.value;
  const currentLocation = locationRef.current!.value;
  if (
    (stringHandler(job.position).includes(stringHandler(currentSearch)) ||
      stringHandler(job.company).includes(stringHandler(currentSearch))) &&
    stringHandler(job.location).includes(stringHandler(currentLocation)) &&
    job.contract === currentMarked
  ) {
    return true;
  }
}
