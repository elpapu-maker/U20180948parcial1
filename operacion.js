module.exports = (y,callback) => {

    if ( y <=0 )
            callback(new Error("se omiten valores que tiene 0 en los dos campos, ya que en todas las operaciones su resultado es = 0"),
            null);
    else
        setTimeout(() =>
            callback(null, {
                salarioHora: () => (10 * y),
                salarioHora1: () => (10 * 7),
                salarioHora2: () => (10 * 6),
                salarioHora3: () => (10 * 5),
                viaticos:()=> (3*(9.25)),
                total:()=> (3*(9.25)+180),
                holgura:()=> (207.75*0.08)

            }),);
}
