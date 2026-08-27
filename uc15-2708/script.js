const estado = prompt( 'estado de destino(sigla):n\' +
    'Ex: RN, SP, RS, AM')?.toUpperCase().trim();

    let frete = 0;
    let regiao = '';
    let prazo = '';

    switch (estado) {
        case 'RN';
        case 'CE';
        case 'PB';
        case 'PE';
        case 'MA';
        case 'PI';
        case 'AL';
        case 'SE';
        case 'BA';
        regiao = 'nordeste';
        frete = 15;
        prazo = '3 dias úteis';
        break;
    }
    case 'RS':
    case 'SC':
    case 'PR';
    regiao = 'SUl';
    frete 30;
    prazo = '7 dias úteis';
    break;

    case'GO':
    case 'MT':
    case 'MS':
    case 'DF':
    regiao = 'centro-oeste';
    prazo = '8 dias úteis';
    break;

    case 'AM':
    case 'PA':
    case 'AC':
    case 'RO':
    case 'RR':
    case 'AP':
    case 'TO':
        regiao = 'norte';
        frete 45;
        prazo = '12 dias úteis';

        default:
            regiao = 'estado enválido';
            frete = 0;
            prazo = 'prazo não disponível';

            if (frete > 0) {
                alert (
                 'estado: $ {estado}\n' +
                 'regiao: ${regiao}\n'  +
                 'frete: R$  ${frete}, 00\n' +
                 'prazo: ${prazo}'
                );
                console.log( {estado, regiao, frete, prazo});
            } else {
                alert('estado "${estado}" não encontrado.\nverifique a sigla e tente novamente.');
            }