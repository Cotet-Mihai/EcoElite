import { COMPANY } from "./data";
import type { RequestPayload } from "./request";

/*
 * Șabloanele de email, scrise în HTML de email — nu în cel de pe site.
 *
 * Clienții de mail nu sunt browsere: Outlook randează prin motorul Word, Gmail
 * elimină o parte din `<style>`, iar flexbox și grid nu se pot folosi. De aceea
 * așezarea e pe tabele, culorile sunt inline, iar fonturile sunt stive de
 * fonturi de sistem. Paleta e a site-ului, dar codul nu are cum să fie comun.
 */

const INK = "#050c0e"; // --background
const SURFACE = "#0e1719"; // cartonul central, o treaptă peste fundal
const GOLD = "#d5b976"; // --secondary-foreground
const GREEN = "#7ec636"; // --primary-foreground
const PAPER = "#f9fafb"; // --foreground
const MUTED = "#808793"; // --muted-foreground
const LINE = "#1b2929"; // --secondary

const FONT = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const siteUrl = "https://ecoelite.ro";

const escape = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

/** Un rând de tabel etichetă/valoare, folosit în ambele mesaje. */
function row(label: string, value: string) {
    return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${LINE};font-family:${FONT};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${MUTED};vertical-align:top;width:38%;">${escape(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${LINE};font-family:${FONT};font-size:15px;color:${PAPER};font-weight:600;vertical-align:top;">${value}</td>
    </tr>`;
}

/** Cadrul comun: fundal, cartonul central, antetul cu numele și subsolul. */
function shell(options: { preheader: string; eyebrow: string; title: string; body: string }) {
    return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
<title>${escape(options.title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${INK};">
  <!-- Preheader: rândul de previzualizare din lista de mesaje. Ascuns în corp,
       altfel clientul de mail ar arăta primele cuvinte din antet. -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escape(options.preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${INK};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${SURFACE};border:1px solid ${LINE};border-radius:20px;overflow:hidden;">

          <tr>
            <td style="height:4px;background-color:${GOLD};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <tr>
            <td style="padding:28px 28px 0;">
              <div style="font-family:${FONT};font-size:22px;font-weight:800;letter-spacing:-0.4px;color:${PAPER};">ECO ELITE</div>
              <div style="font-family:${FONT};font-size:10px;letter-spacing:3px;text-transform:uppercase;color:${GOLD};padding-top:4px;">Colectare și reciclare responsabilă</div>
            </td>
          </tr>

          <tr>
            <td style="padding:26px 28px 0;">
              <div style="font-family:${FONT};font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:${MUTED};">${escape(options.eyebrow)}</div>
              <h1 style="margin:8px 0 0;font-family:${FONT};font-size:24px;line-height:1.25;font-weight:800;color:${PAPER};">${escape(options.title)}</h1>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 28px 28px;">${options.body}</td>
          </tr>

          <tr>
            <td style="padding:20px 28px;border-top:1px solid ${LINE};background-color:${INK};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:${FONT};font-size:12px;line-height:1.7;color:${MUTED};">
                    <a href="tel:${COMPANY.phone.replace(/\s/g, "")}" style="color:${PAPER};text-decoration:none;font-weight:700;">${COMPANY.phone}</a>
                    &nbsp;&middot;&nbsp;
                    <a href="mailto:${COMPANY.email}" style="color:${MUTED};text-decoration:none;">${COMPANY.email}</a>
                    <br />
                    ${escape(COMPANY.address)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <div style="max-width:560px;margin:14px auto 0;font-family:${FONT};font-size:11px;line-height:1.7;color:#575d66;text-align:center;">
          ${escape(`${COMPANY.name} ${COMPANY.legalForm}`)}<br />
          <a href="${siteUrl}" style="color:#575d66;text-decoration:underline;">${siteUrl.replace(/^https?:\/\//, "")}</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Mesajul care ajunge la Eco Elite. Poartă datele, nu decorul. */
export function businessEmail(payload: RequestPayload) {
    const details = [
        row("Nume", escape(payload.name)),
        row(
            "Telefon",
            `<a href="tel:${escape(payload.phone.replace(/\s/g, ""))}" style="color:${PAPER};text-decoration:none;">${escape(payload.phone)}</a>`,
        ),
        row(
            "Email",
            `<a href="mailto:${escape(payload.email)}" style="color:${PAPER};text-decoration:none;">${escape(payload.email)}</a>`,
        ),
        payload.message ? row("Mesaj", escape(payload.message).replace(/\n/g, "<br />")) : "",
        row("Sursă", payload.kind === "rapid" ? "Dialog de contact rapid" : "Formularul de contact"),
    ].join("");

    const body = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${details}</table>
    <div style="margin-top:22px;font-family:${FONT};font-size:12px;color:${MUTED};line-height:1.6;">
      Răspunde direct la acest mesaj ca să îi scrii clientului — adresa lui e deja pusă la „Reply-To".
    </div>`;

    return shell({
        preheader: `${payload.name} · ${payload.phone}`,
        eyebrow: payload.kind === "rapid" ? "Contact rapid" : "Formular de contact",
        title: "Solicitare nouă de pe site",
        body,
    });
}

/** Confirmarea către client. */
export function clientEmail(payload: RequestPayload) {
    const recap = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
         ${row("Numele tău", escape(payload.name))}
         ${row("Telefonul tău", escape(payload.phone))}
         ${payload.message ? row("Mesajul trimis", escape(payload.message).replace(/\n/g, "<br />")) : ""}
       </table>`;

    const body = `
    <p style="margin:0 0 18px;font-family:${FONT};font-size:15px;line-height:1.7;color:${PAPER};">
      Salut, ${escape(payload.name.split(" ")[0] || payload.name)}. Am primit mesajul tău și îți răspundem
      în <strong style="color:${GREEN};">cel mult 24 de ore lucrătoare</strong>, în programul
      ${escape(COMPANY.programInWeek)} (sâmbătă ${escape(COMPANY.programSaturday)}).
    </p>

    <div style="font-family:${FONT};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${MUTED};padding-bottom:6px;">
      Ce ne-ai trimis
    </div>
    ${recap}

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 0;">
      <tr>
        <td style="background-color:${GOLD};border-radius:999px;">
          <a href="tel:${COMPANY.phone.replace(/\s/g, "")}"
             style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:14px;font-weight:700;color:${INK};text-decoration:none;">
            Sună-ne: ${COMPANY.phone}
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 0;font-family:${FONT};font-size:12px;line-height:1.7;color:${MUTED};">
      La acest mesaj nu se poate răspunde — dacă vrei să ne scrii, folosește
      <a href="mailto:${COMPANY.email}" style="color:${GOLD};text-decoration:none;">${COMPANY.email}</a>.
    </p>`;

    return shell({
        preheader: "Am primit mesajul tău. Îți răspundem în cel mult 24 de ore.",
        eyebrow: "Confirmare",
        title: "Am primit mesajul tău",
        body,
    });
}
