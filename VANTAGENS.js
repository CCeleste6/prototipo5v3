window.VANTAGENS = {
  // Ranque 1, 2, 3 (Tier 1) - Requer 0 PM
  "Precursores": {
    0: [
      { id: "p1_1", nome: "Chama da Liderança I", req_text: "Se o aluno for representante em uma atividade de grupo.", pc_gain: 3 },
      { id: "p1_2", nome: "Voz da Inspiração I", req_text: "Ao completar uma atividade coletiva, recebe +5 pontos para cada aluno convidado por você.", pc_gain: 5 },
      { id: "p1_3", nome: "Força da Determinação I", req_text: "Se um aluno da sua turma ou casa que vinha acumulando falhas completar todas as atividades da semana.", pc_gain: 7 },
      { id: "p2_1", nome: "Chama da Liderança II", req_text: "Se você e outro aluno forem representantes em uma atividade de grupo.", pc_gain: 6 },
      { id: "p2_2", nome: "Voz da Inspiração II", req_text: "Ao completar uma atividade coletiva, recebe +7 pontos para cada aluno convidado por você caso três ou mais alunos aceitem.", pc_gain: 7 },
      { id: "p2_3", nome: "Força da Determinação II", req_text: "Se dois alunos da sua turma ou casa que vinham acumulando falhas completarem todas as atividades da semana.", pc_gain: 12 },
      { id: "p3_1", nome: "Chama da Liderança III", req_text: "Se você e outros dois alunos forem representantes em uma atividade de grupo.", pc_gain: 10 },
      { id: "p3_2", nome: "Voz da Inspiração III", req_text: "Ao completar uma atividade coletiva, recebe +13 pontos para cada aluno convidado por você caso cinco ou mais alunos aceitem.", pc_gain: 13 },
      { id: "p3_3", nome: "Força da Determinação III", req_text: "Se três alunos da sua turma ou casa que vinham acumulando falhas completarem todas as atividades da semana.", pc_gain: 16 }
    ],
    // Ranque 4, 5, 6 (Tier 2) - Requer 200 PM
    200: [
      { id: "p4_1", nome: "Bandeira da Coragem I", req_text: "Se um aluno se voluntariar para representar a casa em uma atividade competitiva (interna ou externa).", pc_gain: 15 },
      { id: "p4_2", nome: "Impacto I", req_text: "Se um aluno receber nota máxima em duas atividades na mesma semana.", pc_gain: 20 },
      { id: "p4_3", nome: "Visão Competitiva I", req_text: "Se o aluno conseguir identificar a melhor estratégia para vencer uma competição (e for validada).", pc_gain: 25 },
      { id: "p5_1", nome: "Bandeira da Coragem II", req_text: "Se dois alunos se voluntariarem para representar a casa em atividades competitivas diferentes na mesma semana.", pc_gain: 25 },
      { id: "p5_2", nome: "Impacto II", req_text: "Se um aluno receber nota máxima em três atividades na mesma semana.", pc_gain: 30 },
      { id: "p5_3", nome: "Visão Competitiva II", req_text: "Se a casa conseguir identificar a melhor estratégia para vencer uma competição em grupo (e for validada).", pc_gain: 35 },
      { id: "p6_1", nome: "Bandeira da Coragem III", req_text: "Se três alunos se voluntariarem para representar a casa em atividades competitivas diferentes na mesma semana.", pc_gain: 35 },
      { id: "p6_2", nome: "Impacto III", req_text: "Se um aluno receber nota máxima em todas as atividades da semana.", pc_gain: 40 },
      { id: "p6_3", nome: "Visão Competitiva III", req_text: "Se a casa for a vencedora em uma atividade competitiva, graças à estratégia adotada (e for validada).", pc_gain: 50 }
    ],
    // Ranque 7, 8, 9 (Tier 3) - Requer 600 PM
    600: [
      { id: "p7_1", nome: "Trabalho de Equipe", req_text: "Se 50% da casa participar de uma atividade extra.", pc_gain: 60 },
      { id: "p7_2", nome: "Foco Duplicado", req_text: "Se 50% da casa participar de uma atividade extra, a pontuação dessa atividade é duplicada.", pc_multiplier: 2 },
      { id: "p7_3", nome: "União Vencedora", req_text: "Se a casa conseguir que 50% dos membros recebam nota máxima na mesma atividade.", pc_gain: 75 },
      { id: "p8_1", nome: "Pioneiro Supremo", req_text: "Se a casa for a primeira a propor ou concluir um projeto inédito (competição, feira, desafio) e for validado.", pc_gain: 100 },
      { id: "p8_2", nome: "Força Solitária", req_text: "Se um aluno sozinho alcançar nota máxima em todas as atividades de duas semanas seguidas.", pc_gain: 120 },
      { id: "p8_3", nome: "Legado em Movimento", req_text: "Se 70% da casa participar de uma mesma atividade extra, a pontuação dessa atividade é triplicada.", pc_multiplier: 3 },
      { id: "p9_1", nome: "Vanguarda Absoluta", req_text: "Se a casa completar todas as atividades da semana antes de todas as outras.", pc_gain: 150 },
      { id: "p9_2", nome: "Rota do Destemido", req_text: "Se um aluno assumir sozinho a liderança de um projeto complexo (com pelo menos 5 colegas envolvidos) e levá-lo até a conclusão.", pc_gain: 300 },
      { id: "p9_3", nome: "Legado Audaz", req_text: "Se a casa propor e executar uma atividade ou projeto que nenhuma outra casa tenha tentado antes.", pc_gain: 250 }
    ],
    // Ranque 10 (Tier 4) - Requer 1400 PM (O próximo threshold disponível)
    1400: [
      { id: "p10_1", nome: "Ecos da Liderança", req_text: "Se um aluno da casa assumir a liderança em um projeto interescolar e levá-lo até a conclusão.", pc_gain: 750 },
      { id: "p10_2", nome: "Legado dos Destemidos", req_text: "Se toda a casa participar de um mesmo projeto ou desafio coletivo e concluí-lo com êxito, a pontuação final desse projeto é multiplicada por 5.", pc_multiplier: 5 },
      { id: "p10_3", nome: "Marca Imortal", req_text: "Se um aluno sozinho conquistar um feito de destaque máximo (nota perfeita em todas as atividades de um mês e validação oficial), a casa recebe um bônus de 1000 pontos.", pc_gain: 1000 }
    ]
  },
  
  // Ranque 1, 2, 3 (Tier 1) - Requer 0 PM
  "Visionários": {
    0: [
      { id: "v1_1", nome: "Faísca Criativa I", req_text: "Se um aluno apresentar uma solução original em atividade ou projeto.", pc_gain: 3 },
      { id: "v1_2", nome: "Ousadia Inicial I", req_text: "Se um aluno arriscar uma resposta ou ideia não convencional (mesmo que não seja perfeita).", pc_gain: 5 },
      { id: "v1_3", nome: "Inspiração Compartilhada I", req_text: "Se um aluno sugerir uma ideia que pelo menos 2 colegas aproveitem em suas próprias atividades.", pc_gain: 7 },
      { id: "v2_1", nome: "Faísca Criativa II", req_text: "Se um aluno apresentar duas ou mais soluções originais em atividades ou projetos.", pc_gain: 6 },
      { id: "v2_2", nome: "Ousadia Inicial II", req_text: "Se um aluno arriscar uma resposta ou ideia não convencional e for perfeita.", pc_gain: 15 },
      { id: "v2_3", nome: "Inspiração Compartilhada II", req_text: "Se um aluno sugerir uma ideia que pelo menos 3 colegas aproveitem em suas próprias atividades.", pc_gain: 10 },
      { id: "v3_1", nome: "Faísca Criativa III", req_text: "Se um aluno apresentar três ou mais soluções originais em atividades ou projetos.", pc_gain: 9 },
      { id: "v3_2", nome: "Ousadia Inicial III", req_text: "Recebe +25 pontos para cada vez que um aluno arriscar uma resposta ou ideia não convencional e for perfeita.", pc_gain: 25 },
      { id: "v3_3", nome: "Inspiração Compartilhada III", req_text: "Se um aluno sugerir uma ideia que pelo menos 4 colegas aproveitem em suas próprias atividades.", pc_gain: 15 }
    ],
    // Ranque 4, 5, 6 (Tier 2) - Requer 200 PM
    200: [
      { id: "v4_1", nome: "Laboratório Vivo", req_text: "Se um aluno propor uma solução criativa que seja adotada oficialmente em sala (professor ou turma validam).", pc_gain: 20 },
      { id: "v4_2", nome: "Centelha Coletiva", req_text: "Se 50% dos membros da casa usarem soluções criativas em suas atividades na mesma semana.", pc_gain: 30 },
      { id: "v4_3", nome: "Pintura Audaz", req_text: "Se um aluno usar recursos criativos (fora do padrão) em uma apresentação ou atividade e receber nota máxima.", pc_gain: 40 },
      { id: "v5_1", nome: "Ideia em Ação I", req_text: "Se um aluno colocar em prática uma ideia original em um projeto de grupo e o projeto receber nota máxima.", pc_gain: 40 },
      { id: "v5_2", nome: "Onda de Inovação I", req_text: "Se pelo menos 60% da casa apresentar uma ideia original em qualquer atividade.", pc_gain: 50 },
      { id: "v5_3", nome: "Expressão Máxima I", req_text: "Se a casa criar um projeto criativo (artístico, tecnológico, social) que seja validado pela escola.", pc_gain: 60 },
      { id: "v6_1", nome: "Ideia em Ação II", req_text: "Se dois alunos colocarem em prática ideias originais em projetos diferentes e receberem nota máxima.", pc_gain: 50 },
      { id: "v6_2", nome: "Onda de Inovação II", req_text: "Se pelo menos 70% da casa apresentar uma ideia original em qualquer atividade.", pc_gain: 75 },
      { id: "v6_3", nome: "Expressão Máxima II", req_text: "Se a casa criar um projeto criativo que ganhe destaque (exposição interna, menção) na escola.", pc_gain: 90 }
    ],
    // Ranque 7, 8, 9 (Tier 3) - Requer 600 PM
    600: [
      { id: "v7_1", nome: "Caminho Inovador", req_text: "Se a casa for a primeira a adotar um novo método de estudo ou organização e ele se tornar referência para a turma.", pc_gain: 80 },
      { id: "v7_2", nome: "Raiz Inovadora", req_text: "Se 50% da casa participar de um projeto criativo (arte, ciência, tecnologia), a pontuação desse projeto é duplicada.", pc_multiplier: 2 },
      { id: "v7_3", nome: "Explosão de Gênio", req_text: "Se um aluno sozinho tiver três ideias originais em uma semana que sejam validadas (professores/colegas).", pc_gain: 100 },
      { id: "v8_1", nome: "Criação Coletiva", req_text: "Se a casa concluir um projeto inédito (arte, ciência, tecnologia) e for validado pela escola.", pc_gain: 100 },
      { id: "v8_2", nome: "Inventor Solitário", req_text: "Se um aluno sozinho criar uma solução inédita (protótipo, arte, modelo) que seja reconhecida oficialmente.", pc_gain: 180 },
      { id: "v8_3", nome: "Festival de Ideias", req_text: "Se pelo menos 70% da casa apresentar propostas criativas em uma mesma semana, a pontuação total dessa semana é triplicada.", pc_multiplier: 3 },
      { id: "v9_1", nome: "Visão que Ecoa", req_text: "Se um projeto criativo da casa for adotado por outras turmas ou virar referência escolar.", pc_gain: 250 },
      { id: "v9_2", nome: "Mente Brilhante", req_text: "Se um aluno sozinho conquistar destaque externo (premiação, olimpíada, concurso criativo).", pc_gain: 350 },
      { id: "v9_3", nome: "Impacto Coletivo", req_text: "Se 80% da casa participar de um mesmo projeto criativo e ele gerar reconhecimento fora da escola, a pontuação final é quadruplicada.", pc_multiplier: 4 }
    ],
    // Ranque 10 (Tier 4) - Requer 1400 PM (O próximo threshold disponível)
    1400: [
      { id: "v10_1", nome: "Manifesto Criativo", req_text: "Se a casa elaborar uma proposta artística ou intelectual tão marcante que seja incorporada oficialmente pela escola.", pc_gain: 500 },
      { id: "v10_2", nome: "Horizonte Infinito", req_text: "Se toda a casa participar de um projeto criativo coletivo que ultrapasse os limites da escola, a pontuação final desse projeto é multiplicada por 5.", pc_multiplier: 5 },
      { id: "v10_3", nome: "Gênio Visionário", req_text: "Se um aluno sozinho conquistar reconhecimento externo de alto nível (premiação nacional, publicação, exposição oficial).", pc_gain: 800 }
    ]
  },
  
  // Ranque 1, 2, 3 (Tier 1) - Requer 0 PM
  "Guardiões": {
    0: [
      { id: "g1_1", nome: "Escudo da disciplina I", req_text: "Se o aluno entregar todas as atividades da semana no prazo.", pc_gain: 3 },
      { id: "g1_2", nome: "Responsabilidade compartilhada I", req_text: "Quando 3 alunos diferentes da sua sala concluírem suas tarefas sem atraso.", pc_gain: 5 },
      { id: "g1_3", nome: "Defesa coletiva I", req_text: "Se a casa passar a semana sem penalidades (atraso, ausência ou falha).", pc_gain: 7 },
      { id: "g2_1", nome: "Escudo da disciplina II", req_text: "Se 2 alunos entregarem todas as atividades da semana no prazo.", pc_gain: 6 },
      { id: "g2_2", nome: "Responsabilidade compartilhada II", req_text: "Quando 4 alunos diferentes da sua sala concluírem suas tarefas sem atraso.", pc_gain: 9 },
      { id: "g2_3", nome: "Defesa coletiva II", req_text: "Se a casa passar 2 semanas seguidas sem penalidades.", pc_gain: 12 },
      { id: "g3_1", nome: "Escudo da disciplina III", req_text: "Se 3 alunos entregarem todas as atividades da semana no prazo.", pc_gain: 9 },
      { id: "g3_2", nome: "Responsabilidade compartilhada III", req_text: "Quando 5 alunos diferentes da sua sala concluírem suas tarefas sem atraso.", pc_gain: 13 },
      { id: "g3_3", nome: "Defesa coletiva III", req_text: "Se a casa passar 3 semanas seguidas sem penalidades.", pc_gain: 16 }
    ],
    // Ranque 4, 5, 6 (Tier 2) - Requer 200 PM
    200: [
      { id: "g4_1", nome: "Código da Honra I", req_text: "Se todos os alunos que entregarem atividades na semana fizerem isso sem atraso.", pc_gain: 12 },
      { id: "g4_2", nome: "Vigilância Coletiva I", req_text: "Se pelo menos metade dos alunos forem dessa casa, participar de atividades sem nenhuma falha dá +20 pontos.", pc_gain: 20 },
      { id: "g4_3", nome: "Legião da Ordem I", req_text: "Se todos os membros da casa participarem de pelo menos uma atividade na semana.", pc_gain: 30 },
      { id: "g5_1", nome: "Código da Honra II", req_text: "Se todos os alunos da sua turma entregarem atividades na semana sem atraso.", pc_gain: 25 },
      { id: "g5_2", nome: "Vigilância Coletiva II", req_text: "Se 70% dos alunos da turma forem dessa casa, a casa recebe +35 pontos por semana sem falhas.", pc_gain: 35 },
      { id: "g5_3", nome: "Legião da Ordem II", req_text: "Se 90% dos membros da casa participarem de pelo menos uma atividade na semana.", pc_gain: 45 },
      { id: "g6_1", nome: "Código da Honra III", req_text: "Se a casa for responsável por 100% dos alunos da turma entregarem atividades na semana sem atraso.", pc_gain: 40 },
      { id: "g6_2", nome: "Vigilância Coletiva III", req_text: "Se 80% dos alunos da turma forem dessa casa e a turma passar a semana sem falhas, a casa recebe +50 pontos.", pc_gain: 50 },
      { id: "g6_3", nome: "Legião da Ordem III", req_text: "Se toda a casa participar de pelo menos uma atividade na semana sem falhas.", pc_gain: 60 }
    ],
    // Ranque 7, 8, 9 (Tier 3) - Requer 600 PM
    600: [
      { id: "g7_1", nome: "Ritual de Entrega", req_text: "Se a casa conseguir que todos os membros entreguem todas as suas tarefas no primeiro dia do prazo.", pc_gain: 70 },
      { id: "g7_2", nome: "Baluarte da Disciplina", req_text: "Se a casa passar um mês sem nenhuma penalidade.", pc_gain: 100 },
      { id: "g7_3", nome: "Olhos da Vigília", req_text: "Se pelo menos 70% da casa participar de todas as atividades da semana, a pontuação dessas atividades é duplicada.", pc_multiplier: 2 },
      { id: "g8_1", nome: "Comando da Ordem", req_text: "Se a casa conseguir que todos os líderes de equipe da sua turma entreguem suas tarefas no prazo.", pc_gain: 80 },
      { id: "g8_2", nome: "Ritual da Pontualidade", req_text: "Se 70% da sua turma entregar suas atividades no primeiro dia do prazo.", pc_gain: 90 },
      { id: "g8_3", nome: "Disciplina Contagiante", req_text: "Se 80% da casa participar de todas as atividades da semana, a pontuação dessas atividades é triplicada.", pc_multiplier: 3 },
      { id: "g9_1", nome: "Guardião Supremo", req_text: "Se a casa completar todas as atividades da semana sem nenhuma falha ou atraso.", pc_gain: 150 },
      { id: "g9_2", nome: "Sentinela Eterna", req_text: "Se a casa passar dois meses seguidos sem penalidades.", pc_gain: 200 },
      { id: "g9_3", nome: "Linha Intransponível", req_text: "Se 90% da casa participar de todas as atividades da semana, a pontuação dessas atividades é quadruplicada.", pc_multiplier: 4 }
    ],
    // Ranque 10 (Tier 4) - Requer 1400 PM (O próximo threshold disponível)
    1400: [
      { id: "g10_1", nome: "Estandarte da Ordem", req_text: "Se a casa completar todas as atividades da temporada inteira sem nenhuma penalidade ou atraso coletivo, todos os pontos conquistados na temporada são multiplicados por 2.", pc_multiplier: 2 },
      { id: "g10_2", nome: "Legião Inabalável", req_text: "Se 100% da casa participar de pelo menos uma atividade em uma mesma semana.", pc_gain: 300 },
      { id: "g10_3", nome: "Coluna da Disciplina", req_text: "Se a casa mantiver 80% de participação mínima em todas as atividades de um mês e receber um reconhecimento oficial.", pc_gain: 400 }
    ]
  },
  
  // Ranque 1, 2, 3 (Tier 1) - Requer 0 PM
  "Solidários": {
    0: [
      { id: "s1_1", nome: "Apoio Moral I", req_text: "Sempre que um aluno da sua turma participa de uma atividade coletiva pela primeira vez.", pc_gain: 2 },
      { id: "s1_2", nome: "Força do Grupo I", req_text: "Se pelo menos 2 membros da casa participarem juntos de uma mesma atividade.", pc_gain: 3 },
      { id: "s1_3", nome: "Cuidado Contínuo I", req_text: "A casa recebe +1 ponto para cada atividade em que toda a sua turma entregar. Os pontos recebidos aumentam em +1 a cada 10 atividades entregues.", pc_gain: 1 },
      { id: "s2_1", nome: "Apoio Moral II", req_text: "Sempre que um aluno que já participou antes traz um colega novo para a atividade.", pc_gain: 3 },
      { id: "s2_2", nome: "Força do Grupo II", req_text: "Se 3 ou mais membros da casa participarem juntos de uma mesma atividade.", pc_gain: 5 },
      { id: "s2_3", nome: "Cuidado Contínuo II", req_text: "Se a sua turma completar todas as tarefas da semana sem nenhuma falta.", pc_gain: 8 },
      { id: "s3_1", nome: "Apoio Moral III", req_text: "Sempre que 2 alunos novos participarem juntos de uma atividade em que você esteja pela primeira vez.", pc_gain: 5 },
      { id: "s3_2", nome: "Força do Grupo III", req_text: "Se 4 ou mais membros da casa participarem juntos de uma mesma atividade.", pc_gain: 8 },
      { id: "s3_3", nome: "Cuidado Contínuo III", req_text: "Se a turma completar todas as tarefas da semana com 80% ou mais de acertos dos membros.", pc_gain: 12 }
    ],
    // Ranque 4, 5, 6 (Tier 2) - Requer 200 PM
    200: [
      { id: "s4_1", nome: "Voz Unida", req_text: "Sempre que 3 alunos diferentes incentivarem um colega a participar de uma atividade.", pc_gain: 5 },
      { id: "s4_2", nome: "Sinergia I", req_text: "Se 60% da casa participar de uma mesma atividade coletiva.", pc_gain: 15 },
      { id: "s4_3", nome: "Força do Coletivo I", req_text: "Se a casa organizar uma atividade para a turma e pelo menos metade da turma participar.", pc_gain: 25 },
      { id: "s5_1", nome: "Voz Unida II", req_text: "Sempre que 4 alunos diferentes incentivarem um colega a participar de uma atividade e ele participar.", pc_gain: 10 },
      { id: "s5_2", nome: "Sinergia II", req_text: "Se 70% da casa participar de uma mesma atividade coletiva.", pc_gain: 20 },
      { id: "s5_3", nome: "Força do Coletivo II", req_text: "Se a casa organizar uma atividade para a turma e pelo menos 70% da turma participar.", pc_gain: 30 },
      { id: "s6_1", nome: "Voz Unida III", req_text: "Sempre que 5 alunos diferentes incentivarem um colega a participar de uma atividade e ele completar a tarefa.", pc_gain: 15 },
      { id: "s6_2", nome: "Sinergia III", req_text: "Se 80% da casa participar de uma mesma atividade coletiva.", pc_gain: 25 },
      { id: "s6_3", nome: "Força do Coletivo III", req_text: "Se a casa organizar uma atividade para a turma e pelo menos 80% da turma participar.", pc_gain: 40 }
    ],
    // Ranque 7, 8, 9 (Tier 3) - Requer 600 PM
    600: [
      { id: "s7_1", nome: "Pulso Comunitário", req_text: "Se a casa conseguir que 60% dos membros recebam nota máxima na mesma atividade coletiva, a pontuação é duplicada.", pc_multiplier: 2 },
      { id: "s7_2", nome: "Aliança Perfeita", req_text: "Se todos os membros da casa participarem de pelo menos uma atividade na mesma semana.", pc_gain: 40 },
      { id: "s7_3", nome: "Colheita de Frutos", req_text: "Se a casa completar um mês seguido com 100% de conclusão das tarefas semanais.", pc_gain: 70 },
      { id: "s8_1", nome: "Círculo Inquebrável", req_text: "Se todos os membros da casa participarem de pelo menos uma atividade na mesma semana.", pc_gain: 40 },
      { id: "s8_2", nome: "Legado Vivo", req_text: "Se a turma mantiver 3 semanas seguidas com 100% de conclusão das tarefas semanais.", pc_gain: 100 },
      { id: "s8_3", nome: "Eco Solidário", req_text: "Se a casa conseguir que duas atividades diferentes na mesma semana tenham participação de pelo menos metade dos membros.", pc_gain: 30 },
      { id: "s9_1", nome: "Eterna Colheita", req_text: "Se a casa completar dois meses seguidos com 100% de conclusão das tarefas semanais.", pc_gain: 150 },
      { id: "s9_2", nome: "Força Transcendente", req_text: "Se a casa conseguir organizar três atividades diferentes na mesma semana, cada uma com pelo menos 8 membros participando, a pontuação total é quadruplicada.", pc_multiplier: 4 },
      { id: "s9_3", nome: "Aliança Perfeita (Reforçada)", req_text: "Se todos os membros da casa participarem de pelo menos uma atividade na mesma semana e a casa não falhar em nenhuma tarefa semanal.", pc_gain: 60 }
    ],
    // Ranque 10 (Tier 4) - Requer 1400 PM (O próximo threshold disponível)
    1400: [
      { id: "s10_1", nome: "Coroa da União", req_text: "Se a casa alcançar 100% de participação em todas as atividades de uma semana inteira, todos os pontos dessa semana são triplicados.", pc_multiplier: 3 },
      { id: "s10_2", nome: "Pulso Coletivo", req_text: "Se a casa conseguir manter participação mínima de 75% dos membros em todas as atividades de um mês.", pc_gain: 150 },
      { id: "s10_3", nome: "Coração Único", req_text: "Se a casa completar todas as tarefas do ano letivo sem falhas coletivas, todos os pontos do ano são multiplicados por 5.", pc_multiplier: 5 }
    ]
  }
};
