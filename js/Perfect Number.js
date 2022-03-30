function completeNumber()
			{
				var flag,number,remainder,addition = 0,i;
				number = Number(document.getElementById("N").value);
				flag = number;
				for(i = 0; i < number; i++)
				{
					remainder = number%i;
					if(remainder==0)
					{
						addition += i;
					}
				}
				if(addition == flag)
				{
					window.alert("is wel Perfect getal");
				}
				else
				{
					window.alert("is geen Perfect getal");
				}
			}