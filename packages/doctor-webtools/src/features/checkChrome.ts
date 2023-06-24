import { DoctorMeta, IApi } from "@doctors/core";
import { exec } from "child_process";

async function isChromeInstalled(): Promise<boolean> {
  try {
    const stdout: string = await execCommand(
      "/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --version"
    );
    return stdout.startsWith("Google Chrome");
  } catch (error) {
    console.error(error);
    return false;
  }
}

function execCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const child = exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout.trim());
      }
    });

    child.on("close", () => {
      child.kill();
    });
  });
}

export default (api: IApi) => {
  api.addDoctorWebToolsCheck(async () => {
    const isInstalled = await isChromeInstalled();

    if (isInstalled) {
      return {
        label: "isChromeInstalled",
        description: "You should apply Chrome for web development",
        doctorLevel: "success",
      } as DoctorMeta;
    }
  });
};
