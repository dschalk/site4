import writable from svelte.sore;

function M (x) {
  return function go (func) {
      if (typeof func === "function") {
          x = func(x);
          return go;
      }
      else if (func === "stop") return x;
  }
};

m2 = M([ [0,0,0,0], [], [] ]);

// export default{M, m2}

