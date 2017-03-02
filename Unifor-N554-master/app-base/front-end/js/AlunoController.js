angular
    .module('SistemaAcademico')
    .controller('AlunoController', function ($scope) {
        $scope.turma = {};

        $scope.turmaLista = [
            {valor: 'N673'},
            {valor: 'N554'},
            {valor: 'N583'}
        ];

        $scope.alunoLista = [];

        $scope.addAluno = function () {
            $scope.alunoLista.push($scope.aluno);
            $scope.aluno = {};
        };

        $scope.removerAluno = function (aluno) {
            var index = $scope.alunoLista.indexOf(aluno);

            $scope.alunoLista.splice(index, 1);
        };
    });
