import { readFileSync } from 'fs';
import htmlDirPath from './htmlDirPath.js';
import {join} from "path";


export default (
    (p) => (
        readFileSync(
            join(
                htmlDirPath,
                p
            )
        )
    )
);
