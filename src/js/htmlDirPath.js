import {dirname, join} from "path";
import { fileURLToPath } from "url";

export default console.log(
    join(
        dirname(
        dirname(
            fileURLToPath(
                import.meta.url
            )
        )),
        "html"
    )
)