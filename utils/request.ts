/**
 * Forma unei cereri trimise din site, comună celor două formulare.
 *
 * Stă separat de acțiunea de server ca să o poată importa și componentele de
 * client, fără să tragă după ele SDK-ul de email.
 */
export type RequestPayload = {
    /** „contact" vine din formularul mare, „rapid" din dialogul de contact. */
    kind: "contact" | "rapid";
    name: string;
    email: string;
    phone: string;
    message?: string;
    /** Câmp-capcană: rămâne gol la oameni, se completează la roboți. */
    website?: string;
};

export type RequestResult = { ok: true } | { ok: false; error: string };
