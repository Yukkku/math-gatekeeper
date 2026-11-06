import code from "./code.json" with { type: "json" };

export type Status = {
  tape: Set<bigint>;
  offset: bigint;
  state: number;
};

export const init = (): Status => ({
  tape: new Set(),
  offset: 0n,
  state: 0,
});

export const next = (status: Status) => {
  const [w, m, s] = code[status.state][+status.tape.has(status.offset)] as [
    0 | 1,
    string,
    number,
  ];
  if (w) status.tape.add(status.offset);
  else status.tape.delete(status.offset);
  status.offset += m === "R" ? 1n : -1n;
  status.state = s;
};
