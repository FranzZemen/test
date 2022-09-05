import {cwd} from 'process';
import * as gulpBase from '@franzzemen/gulp-base';
import { createRequire } from "module";
const requireModule = createRequire(import.meta.url);
gulpBase.init(requireModule('./package.json'), cwd() + '/tsconfig.src.json', cwd() + '/tsconfig.test.json', 100);
gulpBase.setMainBranch('main');

export const test = gulpBase.test;

export const clean = gulpBase.clean;
export const buildTest = gulpBase.buildTest;
export default gulpBase.default;

export const patch = gulpBase.patch;
export const minor = gulpBase.minor;
export const major = gulpBase.major;

export const npmForceUpdateProject = gulpBase.npmForceUpdateProject;
export const npmUpdateProject = gulpBase.npmUpdateProject;

