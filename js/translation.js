myApp.config(['$translateProvider', function ($translateProvider) {
    
    $translateProvider.translations('en', {
        'WhoIam': 'Who i am',
        'WhoIamText': 'My name is Raphael Freitas, i\'m  an Analyst Software Developer.',
        'Name': 'Name',
        'Email': 'Email',
        'Subject': 'Subject',
        'Contact': 'Contact',
        'Skills': 'Skills',
        'Aboutme': 'About me'
    });

    $translateProvider.translations('pt', {
        'WhoIam': 'Quem sou eu',
        'WhoIamText': 'Meu nome é Raphael Freitas, eu sou um Analista e Desenvolvedor de Sistemas.',
        'Name': 'Nome',
        'Email': 'Email',
        'Subject': 'Assunto',
        'Contact': 'Contato',
        'Skills': 'Expertises',
        'Aboutme': 'Sobre'
    });

    $translateProvider.preferredLanguage('pt');
  
}]);    