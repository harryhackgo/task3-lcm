// api/asadulloh_mail_com.js
export default function handler(req, res) {
  const q = new URL(req.url, `http://${req.headers.host}`).searchParams;
  const xs = q.get("x");
  const ys = q.get("y");

  // Natural number validation
  const nat = (s) => /^[1-9]\d*$/.test(s);

  res.setHeader("content-type", "text/plain; charset=utf-8");

  if (!nat(xs) || !nat(ys)) return res.end("NaN");

  let a = BigInt(xs),
    b = BigInt(ys);

  const gcd = (m, n) => {
    while (n) {
      const t = m % n;
      m = n;
      n = t;
    }
    return m;
  };

  const g = gcd(a, b);
  const l = (a / g) * b;

  res.end(l.toString());
}
